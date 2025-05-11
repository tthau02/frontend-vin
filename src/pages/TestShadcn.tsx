import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const TestShadcn = () => {
  // State để quản lý form
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
    alert('Đăng nhập thành công!');
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>Login to Shadcn UI</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email:</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password'>Password:</Label>
              <Input
                id='password'
                name='password'
                type='password'
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button type='submit' variant='default' size='lg' className='w-full'>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className='p-5 space-y-3'>
        <Button variant='default'>Default Button</Button>
        <Button variant='destructive'>Destructive Button</Button>
        <Button variant='outline'>Outline Button</Button>
        <Button variant='secondary'>Secondary Button</Button>
        <Button variant='link'>Link Button</Button>
      </div>
    </div>
  );
};

export default TestShadcn;
