import React from 'react'
import {  Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalFrom() {
  return (
    <>
     <Formik
       initialValues={{ username: '', university: '', isAccepted: false,  }}
       onSubmit={onSubmit}
       validationSchema={advancedSchema}
     >
       {() => (
         <Form>
           <CustomInput
           label="Kullanıcı Adı"
           name = "username"
           type = "text"
           placeholder = "Kullanıcı Adı Giriniz"
           />

           <CustomSelect
           label={"Okulunuz"}
           name = {"university"}
           placeholder= "Lüfen üniversite seçiniz"

           >
            <option value="">Lütfen üniversitenizi seçiniz</option>
            <option value="bogazici">Boğaziçi Üniversitesi</option>
            <option value="yeditepe">Yeditepe Üniversitesi</option>
            <option value="odtü">Odtü Üniversitesi</option>
            <option value="itü">İtü Üniversitesi</option>
           </CustomSelect>

           <CustomCheckbox type="checkbox" name="isAccepted"/>
      
         </Form>
       )}
     </Formik>
    </>
  )
}

export default PortalFrom