'use client';
import {useForm, useFormState} from 'react-hook-form';

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: {errors},
  } = useForm();

  const {isSubmitting} = useFormState({control});

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
    alert('Form submitted successfully!');
    reset();
  };

  const password = watch('password');

  return (
    <main className='form-container'>
      <h2 className='mb-4 text-2xl font-bold text-center'>Konfirmasi Input</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input Nama */}
        <div className='form-group'>
          <label htmlFor='name'>Nama Lengkap:</label>
          <input
            type='text'
            id='name'
            {...register('name', {required: 'Nama lengkap harus diisi.'})}
            className='p-2 border border-gray-300 rounded'
          />
          {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
        </div>

        {/* Input Email */}
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            {...register('email', {
              required: 'Email harus diisi.',
              pattern: {value: /^\S+@\S+$/i, message: 'Format email tidak valid.'},
            })}
            className='p-2 border border-gray-300 rounded'
          />
          {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
        </div>

        {/* Input Password */}
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            {...register('password', {required: 'Password harus diisi.'})}
            className='p-2 border border-gray-300 rounded'
          />
          {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
        </div>

        {/* Konfirmasi Password */}
        <div className='form-group'>
          <label htmlFor='confirm_password'>Konfirmasi Password:</label>
          <input
            type='password'
            id='confirm_password'
            {...register('confirmPassword', {
              required: 'Konfirmasi password harus diisi.',
              validate: (value) => value === password || 'Password tidak cocok.',
            })}
            className='p-2 border border-gray-300 rounded'
          />
          {errors.confirmPassword && (
            <p className='text-sm text-red-500'>{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Upload Gambar */}
        <div className='form-group'>
          <label htmlFor='image'>Upload Gambar:</label>
          <input type='file' id='image' {...register('image')} accept='image/*' className='mt-1' />
        </div>

        {/* Select Jenis Kelamin */}
        <div className='form-group'>
          <label htmlFor='gender'>Jenis Kelamin:</label>
          <select
            id='gender'
            {...register('gender', {required: 'Pilih jenis kelamin.'})}
            className='p-2 border border-gray-300 rounded'>
            <option value=''>Pilih Jenis Kelamin</option>
            <option value='male'>Laki-Laki</option>
            <option value='female'>Perempuan</option>
            <option value='other'>Lainnya</option>
          </select>
          {errors.gender && <p className='text-sm text-red-500'>{errors.gender.message}</p>}
        </div>

        {/* Checkbox Pilihan Tambahan */}
        <div className='form-group'>
          <label>Pilihan Tambahan:</label>
          <div className='checkbox-group'>
            <label className='flex items-center space-x-2'>
              <input type='checkbox' {...register('options.newsletter')} />
              <span>Langganan Newsletter</span>
            </label>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                {...register('options.terms', {required: 'Harap setujui syarat dan ketentuan.'})}
              />
              <span>Setuju dengan syarat dan ketentuan</span>
            </label>
          </div>
          {errors.options?.terms && (
            <p className='text-sm text-red-500'>{errors.options.terms.message}</p>
          )}
        </div>

        {/* Tombol Submit dan Reset */}
        <div className='button-container'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='p-2 text-white bg-blue-600 rounded hover:bg-blue-700'>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          <button
            type='button'
            onClick={() => reset()}
            className='p-2 text-white bg-red-600 rounded hover:bg-red-700'>
            Reset
          </button>
        </div>
      </form>
    </main>
  );
}
