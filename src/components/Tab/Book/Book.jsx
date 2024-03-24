import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Formik } from "formik";
import { bookVan } from "../../../redux/Adverts/slice";
import  formatDate  from "../../helpers/formatDate";
import bookVanSchema from "../../../schemas/schemas";
import  Calendar  from "../Calendar/Calendar";
import sprite from "../../../assets/sprite.svg";
import {
  ErrorMsg,
  Form,
  Label,
  SubmitBtn,
  TitleBlock,
} from "./Book.styled";

const initValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const BookForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = async ({ name, email, date, comment }, actions) => {
    const formData = {
      name,
      email,
      date: formatDate(date),
      comment,
    };

    const isValid = await bookVanSchema.isValid(formData);

    if (!isValid) {
      return;
    }

    dispatch(bookVan(formData));
    toast("Successfully sent!");

    setTimeout(() => window.location.reload(), 700);
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleFormSubmit}
      validationSchema={bookVanSchema}
    >
      {({ touched, errors, handleSubmit, getFieldProps }) => (
        <Form onSubmit={handleSubmit}>
          <TitleBlock>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </TitleBlock>

          <Label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...getFieldProps("name")}
            />
            {errors.name && touched.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </Label>

          <Label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...getFieldProps("email")}
            />
            {errors.email && touched.email && (
              <ErrorMsg>{errors.email}</ErrorMsg>
            )}
          </Label>

          <Label >
            {<Calendar />}
             <svg width={16} height={16}>
                     <use href={`${sprite}#icon-camper`}></use>
                      </svg>
                      
            {errors.date && touched.date && <ErrorMsg>{errors.date}</ErrorMsg>}
          </Label>

          <Label>
            <textarea
              name="comment"
              placeholder="Comment"
              {...getFieldProps("comment")}
            />
            {errors.comment && touched.comment && (
              <ErrorMsg>{errors.comment}</ErrorMsg>
            )}
          </Label>

          <SubmitBtn type="submit" disabled={Object.keys(errors).length > 0}>
            Send
          </SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;