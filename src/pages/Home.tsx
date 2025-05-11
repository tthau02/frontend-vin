import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[80vh]'>
      <Card className='w-full max-w-lg'>
        <CardHeader>
          <CardTitle>Vinaside Frontend</CardTitle>
          <CardDescription>Đây là trang chủ của ứng dụng Vinaside</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Chào mừng bạn đến với dự án frontend Vinaside.</p>
        </CardContent>
        <CardFooter>
          <Button>Bắt đầu</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
