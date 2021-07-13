export const formDataLoging = async (email, password) => {
  const url = 'http://localhost:4000/api/login';
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const err = await response.json();
      return err;
    }

  } catch (err) {
    console.log(err);
  }

}

export const formDataRecoverPassword = async (email) => {
  const url = 'http://localhost:4000/api/recover_password';
  const formData = new FormData();
  formData.append('email', email);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const err = await response.json();
      return err;
    }

  } catch (err) {
    console.log(err);
  }
}

export const formDataResetPassword = async(token, password) => {
  const url = 	'http://localhost:4000/api/reset_password';
  const formData = new FormData();
  formData.append('password', password);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers:  new Headers({
        Authorization: `Bearer ${token}`,
      }),
      body: formData,
    });

    if (response.ok) {
      return response;
    } else {
      const err = await response.json();
      return err;
    }
  } catch (err) {
    console.log(err);
  }
}