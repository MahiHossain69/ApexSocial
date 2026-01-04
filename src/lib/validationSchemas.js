import { z } from "zod";

export const ApexAcademySchema = z.object({
  seminarDate: z.date().optional(),
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, { message: "First name is required" }),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, { message: "Last name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  homePhone: z
    .string({ required_error: "Home phone is required" })
    .min(1, { message: "Home phone is required" }),
  profession: z
    .string({ required_error: "Profession is required" })
    .min(1, { message: "Profession is required" }),
});

export const baseStepSchema = z.object({
  "passport-country": z.enum(["us", "uk", "bd"], {
    message: "Passport country is required",
  }),
  "addressed-person": z.enum(["mr.", "mrs.", "ms.", "mss."], {
    message: "Please select an option",
  }),
  dob: z.date({ required_error: "Date of birth is required" }),
  "start-date": z.date({ required_error: "Start date is required" }),
  interestedWorkingCountry: z.enum(["china", "new-york", "australia"], {
    message: "Please select an interested country",
  }),
  howHearAboutUs: z.enum(["friend", "social-media", "website", "other"], {
    message: "Please select an option",
  }),
});

export const step2Schema = z.object({
  "au-pair-before": z.enum(["yes", "no"], {
    message: "Please select an option",
  }),
  "split-schedule": z.enum(["yes", "no"], {
    message: "Please select an option",
  }),
  idealStartDate: z.date({ required_error: "Ideal start date is required" }),
  earliestStartDate: z.date({
    required_error: "Earliest start date is required",
  }),
  latestStartDate: z.date({ required_error: "Latest start date is required" }),
  desiredProgramLength: z.enum(["6month", "12month", "18month", "24month"], {
    message: "Program length is required",
  }),
  departureAirport: z
    .string({ required_error: "Departure airport is required" })
    .min(1, { message: "Departure airport is required" }),
  deniedUsVisa: z.enum(["yes", "no"], {
    message: "Please select an option",
  }),
  interestedWorkingCountry: z.enum(["usa", "canada", "australia", "uk"], {
    message: "Please select an interested country",
  }),
  howHearAboutUs: z.enum(["friend", "social-media", "website", "other"], {
    message: "How did you hear about us is required",
  }),
});

export const step3Schema = z.object({
  mainProfileImage: z.any().optional(),
  mainRotation: z.number().optional(),
  headshotImage: z.any().optional(),
  headshotRotation: z.number().optional(),
  additionalImages: z.array(z.any()).optional(),
  activeImageIndex: z.number().optional(),
  additionalRotation: z.number().optional(),
  videoPreview: z.any().optional(),
  profileDescription: z.string().optional(),
  headshotDescription: z.string().optional(),
  additionalDescriptions: z.record(z.string()).optional(),
  videoDescription: z.string().optional(),
});

export const step1Schema = z
  .object({
    // Base fields that might be inherited
    firstName: z
      .string({ required_error: "First name is required" })
      .min(1, "First name is required"),
    lastName: z
      .string({ required_error: "Last name is required" })
      .min(1, "Last name is required"),

    dob: z.date({ required_error: "Date of birth is required" }),
    mobilePhone: z
      .string({ required_error: "Mobile phone is required" })
      .min(1, "Mobile phone is required")
      .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),

    // Step 1 specific fields
    "addressed-person": z
      .string({
        required_error: "Please select how you'd like to be addressed",
      })
      .min(1, "Please select how you'd like to be addressed"),
    profession: z
      .string({ required_error: "Profession is required" })
      .min(1, "Profession is required"),
    "vocation-training-date": z.date({
      required_error: "Vocation training date is required",
    }),
    "street-address": z
      .string({ required_error: "Street address is required" })
      .min(1, "Street address is required"),
    city: z
      .string({ required_error: "City is required" })
      .min(1, "City is required"),
    state: z
      .string({ required_error: "State is required" })
      .min(1, "State is required"),
    "zip-code": z
      .string({ required_error: "Zip code is required" })
      .min(1, "Zip code is required"),
    country: z
      .string({ required_error: "Country is required" })
      .min(1, "Country is required"),
    "passport-country": z
      .string({ required_error: "Please select your passport country" })
      .min(1, "Please select your passport country"),
    "facebook-url": z.string().superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Facebook URL is required",
        });
        return;
      }
      if (!z.string().url().safeParse(val).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid Facebook URL",
        });
      }
    }),
    "instagram-url": z.string().superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Instagram URL is required",
        });
        return;
      }
      if (!z.string().url().safeParse(val).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid Instagram URL",
        });
      }
    }),
    "tiktok-url": z.string().superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "TikTok URL is required",
        });
        return;
      }
      if (!z.string().url().safeParse(val).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid TikTok URL",
        });
      }
    }),
    "youtube-url": z.string().superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "YouTube URL is required",
        });
        return;
      }
      if (!z.string().url().safeParse(val).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid YouTube URL",
        });
      }
    }),
    "linkedin-url": z.string().superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "LinkedIn URL is required",
        });
        return;
      }
      if (!z.string().url().safeParse(val).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid LinkedIn URL",
        });
      }
    }),
    "blog-url": z.string().superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Blog URL is required",
        });
        return;
      }
      if (!z.string().url().safeParse(val).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid blog URL",
        });
      }
    }),
    "website-url": z.string().superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Website URL is required",
        });
        return;
      }
      if (!z.string().url().safeParse(val).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid website URL",
        });
      }
    }),
    "first-aid-certificate": z.enum(["yes", "no"], {
      required_error: "Please select if you have a first aid certificate",
      invalid_type_error: "Please select if you have a first aid certificate",
    }),
    "t-shirt-size": z.enum(
      ["extra-small", "small", "medium", "large", "extra-large"],
      {
        required_error: "Please select your t-shirt size",
        invalid_type_error: "Please select your t-shirt size",
      }
    ),

    // Emergency Contact fields
    ECfirstName: z
      .string({ required_error: "Emergency contact first name is required" })
      .min(1, "Emergency contact first name is required"),
    EClastName: z
      .string({ required_error: "Emergency contact last name is required" })
      .min(1, "Emergency contact last name is required"),
    ECemail: z
      .string({ required_error: "Emergency contact email is required" })
      .email("Please enter a valid emergency contact email"),
    ECprofession: z
      .string({ required_error: "Emergency contact profession is required" })
      .min(1, "Emergency contact profession is required"),
    ECstreetAddress: z
      .string({
        required_error: "Emergency contact street address is required",
      })
      .min(1, "Emergency contact street address is required"),
    ECcity: z
      .string({ required_error: "Emergency contact city is required" })
      .min(1, "Emergency contact city is required"),
    ECpostalCode: z
      .string({ required_error: "Emergency contact postal code is required" })
      .min(1, "Emergency contact postal code is required"),
    ECstate: z
      .string({ required_error: "Emergency contact state is required" })
      .min(1, "Emergency contact state is required"),
    ECcountry: z
      .string({ required_error: "Emergency contact country is required" })
      .min(1, "Emergency contact country is required"),
    ECmobilePhone: z
      .string({ required_error: "Emergency contact mobile phone is required" })
      .min(1, "Emergency contact mobile phone is required")
      .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid mobile phone number"),
    EChomePhone: z
      .string({ required_error: "Emergency contact home phone is required" })
      .min(1, "Emergency contact home phone is required")
      .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid home phone number"),
    EClanguage: z
      .string({ required_error: "Emergency contact language is required" })
      .min(1, "Emergency contact language is required"),

    // Placement Information fields
    "allergic-to-animals": z.enum(["yes", "no"], {
      required_error: "Please select if you are allergic to animals",
      invalid_type_error: "Please select if you are allergic to animals",
    }),
    "afraid-of-animals": z.enum(["yes", "no"], {
      required_error: "Please select if you are afraid of animals",
      invalid_type_error: "Please select if you are afraid of animals",
    }),

    // Animal allergy selections and levels
    "allergy-selections": z
      .record(z.boolean())
      .optional()
      .superRefine((val, ctx) => {
        if (
          !val ||
          Object.keys(val).length === 0 ||
          !Object.values(val).some(Boolean)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "Please select an option for what animal you are allergic to",
          });
        }
      }),
    "allergy-levels": z.record(z.number().min(1).max(5)).optional(),
    "other-allergy-name": z.string().optional(),
    "other-allergy-checked": z.boolean().optional(),

    // Animal fear selections and levels
    "fear-selections": z
      .record(z.boolean())
      .optional()
      .superRefine((val, ctx) => {
        if (
          !val ||
          Object.keys(val).length === 0 ||
          !Object.values(val).some(Boolean)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "Please select an option for what animal you are afraid of",
          });
        }
      }),
    "fear-levels": z.record(z.number().min(1).max(5)).optional(),
    "other-fear-name": z.string().optional(),
    "other-fear-checked": z.boolean().optional(),

    "health-conditions": z.string().optional(),
    medications: z.string().optional(),
    "have-other-allergies": z.string().optional(),
    "have-driver-certificate": z.enum(["yes", "no"], {
      required_error: "Please select if you have a driver's license",
      invalid_type_error: "Please select if you have a driver's license",
    }),
    "comfortable-with-children": z.enum(["yes", "no"], {
      required_error:
        "Please select if you are comfortable driving with children",
      invalid_type_error:
        "Please select if you are comfortable driving with children",
    }),
    "enjoy-driving": z.enum(["yes", "no"], {
      required_error: "Please select if you enjoy driving",
      invalid_type_error: "Please select if you enjoy driving",
    }),
    "have-drive-in-snow": z.enum(["yes", "no"], {
      required_error: "Please select if you have experience driving in snow",
      invalid_type_error:
        "Please select if you have experience driving in snow",
    }),
    "how-often-do-you-drive": z.enum(
      ["regularly", "weekly", "often-in-a-month"],
      {
        required_error: "Please select how often you drive",
        invalid_type_error: "Please select how often you drive",
      }
    ),
    "year-of-experience": z.string().superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Enter a number for years of experience",
        });
        return;
      }
      if (!/^\d+$/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter numbers only for years of experience",
        });
      }
    }),
    "about-driving-skills-experience": z.enum(
      ["beginner", "intermediate", "experienced", "expert"],
      {
        required_error: "Please select your driving skill level",
        invalid_type_error: "Please select your driving skill level",
      }
    ),
    "getting-license": z.enum(["yes", "no"], {
      required_error: "Please select if you are open to getting a license",
      invalid_type_error: "Please select if you are open to getting a license",
    }),

    // Dietary restriction fields
    "dietary-restrictions": z
      .record(z.boolean())
      .optional()
      .superRefine((val, ctx) => {
        if (
          !val ||
          Object.keys(val).length === 0 ||
          !Object.values(val).some(Boolean)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please select an option for dietary restrictions",
          });
        }
      }),
    "other-dietary-restriction-name": z.string().optional(),
    "other-dietary-restriction-checked": z.boolean().optional(),
    "dietary-restrictions-importance": z.enum(
      ["not-important", "somewhat-important", "very-important"],
      {
        required_error:
          "Please select how important dietary restrictions are to you",
        invalid_type_error:
          "Please select how important dietary restrictions are to you",
      }
    ),
  })
  .refine(
    (data) => {
      // Validate "Other" allergy name when checkbox is checked
      if (
        data["other-allergy-checked"] &&
        (!data["other-allergy-name"] ||
          data["other-allergy-name"].trim() === "")
      ) {
        return false;
      }
      // Validate "Other" fear name when checkbox is checked
      if (
        data["other-fear-checked"] &&
        (!data["other-fear-name"] || data["other-fear-name"].trim() === "")
      ) {
        return false;
      }
      // Validate "Other" dietary restriction name when checkbox is checked
      if (
        data["other-dietary-restriction-checked"] &&
        (!data["other-dietary-restriction-name"] ||
          data["other-dietary-restriction-name"].trim() === "")
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Please specify the name when 'Other' is selected",
      path: ["other-allergy-name"], // This will be overridden by individual field validation
    }
  );

export const step4Schema = z.object({
  primaryColorCode: z.enum(["red", "blue", "green", "yellow"], {
    message: "Primary color code is required.",
  }),
  secondaryColorCode: z.enum(["red", "blue", "green", "yellow"], {
    message: "Secondary color code is required.",
  }),
});

export const educationPartSchema = z
  .object({
    otherDegreeCertification: z
      .string({
        required_error: "Pursing another degree/certification is required.",
      })
      .min(1, { message: "Pursing another degree/certification is required." }),
    highestDegree: z.enum(["O-Level.", "A-Level", "PhD", "MBA"], {
      message: "Highest degree is required",
    }),
    schoolUniversityName: z
      .string({
        required_error: "School/University name is required.",
      })
      .min(1, { message: "School/University name is required." }),
    graduationDate: z.date({
      message: "Expected graduation date is required",
    }),

    currentEmployer: z
      .string({
        required_error: "Current employer is required",
      })
      .min(1, {
        message: "Current employer is required",
      }),
    employerNotice: z.enum(["yes", "no"], {
      message: "Employer notice is required",
    }),
    howMuchNotice: z.enum(["1-week", "2-week", "3-week", "4-week"], {
      message: "How much employer notice is required",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.employerNotice === "yes" && !data.howMuchNotice) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["howMuchNotice"],
        message: "Notice period is required if you have given notice",
      });
    }
  });

export const professionalExperienceSchema = z
  .object({
    ageGroupExperience: z.enum(["1-week", "2-week", "3-week", "4-week"], {
      message: "Age group experience is required",
    }),
    workedWithChildrenZeroTo24Months: z.enum(["yes", "no"], {
      message: "Please select an option for working with children 0-24 months",
    }),
    howManyHoursWithZeroTo24Months: z.enum(
      ["Yes-less-than-50-hours", "Yes-50-100-hours", "have-not"],
      {
        message:
          "Please select an option for working with children 0-24 months",
      }
    ),

    yearsChildcareExperience: z.enum(
      ["1-2-years", "2-3-years", "3-4-years", "4-5-years"],
      {
        message: "Years of childcare experience is required",
      }
    ),
    desiredAgeGroupToWorkWith: z.enum(
      ["1-2-years", "2-3-years", "3-4-years", "4-5-years"],
      {
        message: "Desired age group to work with is required",
      }
    ),
    hasSpecialNeedsCaringExperience: z.enum(["yes", "no"], {
      message: "Please confirm special needs caring experience",
    }),
    describeSpecialNeedsExperience: z
      .string({
        required_error: "Description of special needs experience is required",
      })
      .min(1, {
        message: "Description of special needs experience is required",
      }),
    specialNeedsCondition: z.enum(
      [
        "physical-disabilities",
        "hearing-impairment",
        "vision-impairment",
        "cerebral-palsy",
      ],
      {
        message: "Special needs condition is required",
      }
    ),
  })
  .superRefine((data, ctx) => {
    if (data.hasSpecialNeedsCaringExperience === "yes") {
      if (!data.describeSpecialNeedsExperience) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["describeSpecialNeedsExperience"],
          message: "Description of special needs experience is required",
        });
      }
      if (!data.specialNeedsCondition) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["specialNeedsCondition"],
          message: "Special needs condition is required",
        });
      }
    }
  });

export const childcareExperienceSchema = z.object({
  experienceType: z
    .string({ required_error: "Experience type is required" })
    .min(1, { message: "Experience type is required" }),
  experienceDuration: z
    .string({ required_error: "Date is required" })
    .min(1, { message: "Date is required" }),
  totalHours: z
    .string({ required_error: "Total hours is required" })
    .min(1, { message: "Total hours is required" }),
  children: z
    .string({ required_error: "Children description is required" })
    .min(1, { message: "Children description is required" }),
  duties: z
    .string({ required_error: "Duties are required" })
    .min(1, { message: "Duties are required" }),
  frequency: z
    .string({ required_error: "Frequency is required" })
    .min(1, { message: "Frequency is required" }),
  referenceName: z.string().optional(),
  referenceEmail: z
    .string()
    .email({ message: "Invalid email address" })
    .optional()
    .or(z.literal("")),
});

export const step5Schema = z.object({
  educationPart: educationPartSchema,
  professionalExperience: professionalExperienceSchema,
  childcareExperiences: z
    .array(childcareExperienceSchema)
    .min(1, "At least one childcare experience is required"),
});

export const step6Schema = z.object({
  whatProfessionYouChoose: z
    .string({ required_error: "Profession choice is required" })
    .min(1, { message: "Profession choice is required" }),

  interestToJoinApexSocial: z
    .string({ required_error: "Interest to join Apex Social is required" })
    .min(1, { message: "Interest to join Apex Social is required" }),

  motivatingToGoAbroad: z
    .string({ required_error: "Motivation to go abroad is required" })
    .min(1, { message: "Motivation to go abroad is required" }),

  strengthBringingHostFamily: z
    .string({ required_error: "Strengths for host family are required" })
    .min(1, { message: "Strengths for host family are required" }),

  hobbiesAndInterests: z
    .string({ required_error: "Hobbies and interests are required" })
    .min(1, { message: "Hobbies and interests are required" }),

  whatShouldKnowAboutYou: z
    .string({ required_error: "Information about yourself is required" })
    .min(1, { message: "Information about yourself is required" }),

  livedAwayFromHome: z.enum(["yes", "no"], {
    message: "Please select an option",
  }),
});

export const step7Schema = z.object({
  letterToHostFamily: z
    .string({ required_error: "Letter to host family is required" })
    .superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Letter to host family is required",
        });
      } else if (val.length < 100) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 100,
          type: "string",
          inclusive: true,
          message: "Letter must contain at least 100 characters",
        });
      }
    }),
});

export const step8Schema = z.object({
  emergencyContact: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Emergency Contact reference is required",
    }),
  personalReference: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Personal Reference is required",
    }),
  teacherReference: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Teacher Reference is required",
    }),
  childcareReference1: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Childcare Reference 1 is required",
    }),
  childcareReference2: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Childcare Reference 2 is required",
    }),
});

export const step9Schema = z.object({
  validPassport: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Valid Passport is required",
    }),
  degreeCertificate: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message:
        "Secondary and/or college degree conclusion certificate(s) is required",
    }),
  criminalRecord: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Criminal Record Transcript is required",
    }),
  driverLicense: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Driver License or International Driver License is required",
    }),
  physicianReport: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Physician's Report is required",
    }),
  childcareWorksheet: z
    .object({
      uploaded: z.boolean(),
      file: z.any().optional(),
    })
    .refine((data) => data.uploaded, {
      message: "Childcare Experience Worksheet is required",
    }),
});
