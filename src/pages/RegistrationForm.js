import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialEvent = location.state?.event || '';
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    event: initialEvent,
    date: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const events = [
    'Мастер-класс по лепке',
    'Живопись маслом', 
    'Выставка'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Введите ФИО';
    }
    
    if (!formData.phone.match(/^\+?[0-9]{10,15}$/)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Введите корректный email';
    }
    
    if (!formData.event) {
      newErrors.event = 'Выберите мероприятие';
    }
    
    if (formData.event === 'Выставка' && !formData.date) {
      newErrors.date = 'Выберите дату посещения';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  let message = `Вы ввели следующие данные:\n\n` +
      `ФИО: ${formData.fullName}\n` +
      `Телефон: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Мероприятие: ${formData.event}`;
    if (formData.event === 'Выставка') {
      message += `\nДата посещения: ${formData.date}`;}

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Здесь можно добавить отправку данных на сервер
      alert(message);
      console.log('Форма отправлена:', formData);
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/Main'); // Перенаправление после успешной отправки
      }, 1000);
    }
  };

  
  return (
    <div className={classes.formContainer}>
      <h2>Форма записи</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label>ФИО:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className={classes.error}>{errors.fullName}</span>}
        </div>

        <div className={classes.formGroup}>
          <label>Телефон:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7XXXXXXXXXX"
          />
          {errors.phone && <span className={classes.error}>{errors.phone}</span>}
        </div>

        <div className={classes.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={classes.error}>{errors.email}</span>}
        </div>

        <div className={classes.formGroup}>
          <label>Мероприятие:</label>
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
          >
            <option value="">Выберите мероприятие</option>
            {events.map(event => (
              <option key={event} value={event}>{event}</option>
            ))}
          </select>
          {errors.event && <span className={classes.error}>{errors.event}</span>}
        </div>

        {formData.event === 'Выставка' && (
          <div className={classes.formGroup}>
            <label>Дата посещения:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span className={classes.error}>{errors.date}</span>}
          </div>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
