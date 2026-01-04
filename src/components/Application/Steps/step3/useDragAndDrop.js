export const useDragAndDrop = () => {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (
    e,
    setImageState,
    setRotationState,
    multiple = false,
    addImagesState,
    handleImageChange
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0) return;

    // Create a mock event object for handleImageChange
    const mockEvent = {
      target: {
        files: multiple ? files : [files[0]],
      },
    };

    handleImageChange(
      mockEvent,
      setImageState,
      setRotationState,
      multiple,
      addImagesState
    );
  };

  return {
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
  };
};