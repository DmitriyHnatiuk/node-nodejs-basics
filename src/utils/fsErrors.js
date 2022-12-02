class FSError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Error_File_System';
    this.message = message || 'FS operation failed';
  }
}

export { FSError };
