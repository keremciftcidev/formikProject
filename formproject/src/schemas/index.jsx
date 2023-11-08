import * as yup from "yup";
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-mail giriniz")
    .required("E mail girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Tam sayı giriniz")
    .required("Yaş girmek zorunludur"),
  password: yup
    .string()
    .min(5, "Minimum 5 karakterli olmalaıdır")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf bir küçük harf ve sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')],'Şifreler eşleşmiyor').required('Tekrar şifre giriniz')
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3,"Kullanıcı adı min 3 karakter uzunluğnda olmalıdır")
    .required("kullanıcı adı zorunludur"),
  university: yup
   
    .string().oneOf(['yeditepe','bogazici','odtü','itü'],'Lütfen üniversitenizi seçininz').required('Lütfen üniversite seçiniz'),
   

  

  isAccepted: yup
    .boolean()
    .oneOf([true],'Kullanım koşullarını kabul ediniz ')
});
