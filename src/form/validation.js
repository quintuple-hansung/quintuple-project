function isEmail(string) { // 이메일 형식 확인
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(string);
}
  
  export function email(value) {
    return value && !isEmail(value.trim()) ? '이메일 형식을 확인해주세요.' : null;
  }
  
  function isDirty(value) {
    return value || value === 0;
  }
  
  export function required(requiredFields, values) {
    return requiredFields.reduce(
      (fields, field) => ({
        ...fields,
        ...(isDirty(values[field]) ? undefined : { [field]: '정보를 입력해주세요.' }),
      }),
      {},
    );
  }