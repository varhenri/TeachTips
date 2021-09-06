import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { addTip } from '../../Store/tip';
import { getCategoriesForReactSelect } from '../../Store/category';

const useStyles = makeStyles((theme) => ({
    submit: {
        marginTop:theme.spacing(2)
    },
    select: {
        marginTop:theme.spacing(2)
    }
  }));
  
const validationSchema = yup.object({
  title: yup
    .string('Enter a title')
    .max(50, 'Maximum title length is 50 characters')
    .required('Title is required'),
  text: yup
    .string('Enter your text')
    .max(5000, 'Maximum text length is 5000 characters')
    .required('Text is required'),
});

const AddTipsContent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesForReactSelect);

  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
      categories: []
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const categoryIds = values.categories.map(value => value.value);
      const payload = {...values, categories: categoryIds };

      dispatch(addTip(payload));
      //should close after promise resolves
      props.handleModalClose();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          id="text"
          name="text"
          label="Text"
          type="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          error={formik.touched.text && Boolean(formik.errors.text)}
          helperText={formik.touched.text && formik.errors.text}
          multiline
          rows={1}
          rowsMax={6}
        />
        <Select
            isMulti
            onChange={(value) => formik.setFieldValue("categories", value)}
            value={formik.values.categories}
            options={categories}
            className={"basic-multi-select " + classes.select}
            classNamePrefix="select"
            placeholder="Select category..."
        />
        <Button color="primary" variant="contained" fullWidth className={classes.submit} type="submit">
          Add tip
        </Button>
      </form>
    </div>
  );
};

export default AddTipsContent;