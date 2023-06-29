import { Button, Form, Input, Modal } from 'antd';
import React, { useRef, useState } from 'react';

const AddToDo = ({ addTask }) => { 
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const submitHandler = (values) => { 
    addTask(values.name);
    form.current.resetFields();
    handleCancel();
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={submitHandler} ref={form}>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item>
            <Button htmlType='submit' type='primary'>Save</Button>
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
}







/* const AddToDo = ({ addTask }) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);


  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length > 3) {
      addTask(name);
      setName('');
      setNameError(null);
    }
    else { 
      setNameError(' > 3 symbols');
    }
  };

  const handleChange = (e) => { 
    setName(e.target.value);
    if (name.trim().length <= 3) {
      setNameError(" >= 3 symbols");
    }
    else { 
      setNameError(null);
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={handleChange} />
        {nameError ? <div className='error'>{nameError}</div> : ''}
        <button>Add</button>
      </form>
    </div>
  );
} */

export default AddToDo;
