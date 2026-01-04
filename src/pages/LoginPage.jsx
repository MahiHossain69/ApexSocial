import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import logo from '@/assets/formImg.png';
import LoginBg from '@/assets/loginbg.png';
import { Card } from '@/components/ui/card';
import { LoginLockIcon, LoginMailIcon } from '@/components/shared/svgs';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
     
      <img
        src={LoginBg} 
        alt="Background"
        className="absolute inset-0 w-full h-full object-center"
      />

     
      <div className="absolute inset-0 bg-black/20"></div>

     
      <Card className="relative z-10 flex items-center rounded-xl border-none mx-auto w-[332px] px-4 py-8 backdrop-blur-sm shadow-lg">
        <div className="mx-auto grid max-w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <img src={logo} alt="Apex Social Logo" className="mx-auto max-h-26 max-w-67" />
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <LoginMailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-soft-400 w-5 h-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

           
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <LoginLockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-soft-400 w-5 h-5" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent shadow-none hover:bg-transparent text-soft-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) =>
                  handleInputChange({ target: { name: 'rememberMe', checked, type: 'checkbox' } })
                }
              />
              <Label htmlFor="rememberMe" className="text-sm font-normal text-primary">
                Remember me
              </Label>
            </div>

           
           <Link to="/">
            <Button type="submit" className="w-full bg-BrandPrimary hover:bg-[#4edcce]">
              Register
            </Button>
           </Link>
          </form>

         
          <div className="flex flex-col mx-auto text-center gap-2">
            <Link to="#">
            <p href="#" className="text-soft-400 font-semibold text-xs">Forgot your password?</p>
            </Link>
            <Link to="#">
            <p href="#" className="text-soft-400 font-semibold text-xs">Not a member yet? Register now!</p>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
