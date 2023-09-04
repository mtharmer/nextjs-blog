export async function handleArrays(requestMethod) {
  try {
    const result = await requestMethod();
    return result;
  } catch (err) {
    alert(err);
    return [];
  }
}

export async function handleObject(id, requestMethod) {
  try {
    const result = await requestMethod(id);
    return result;
  } catch (err) {
    alert(err);
    return {};
  }
}
