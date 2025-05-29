const simulateAsyncOperation = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve("✅ La operación fue exitosa.");
    } else {
      reject("❌ La operación falló.");
    }
  }, 2000);
});

const handleAsync = async () => {
  try {
    const result = await simulateAsyncOperation;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

handleAsync();
