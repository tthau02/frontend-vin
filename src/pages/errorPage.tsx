import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HomeIcon, ServerCrash, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const errorPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-muted p-3">
              <ServerCrash className="h-10 w-10 text-muted-foreground" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">404</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl font-semibold mb-2">Dịch vụ không khả dụng</p>
          <p className="text-muted-foreground">
            Máy chủ hiện đang quá tải hoặc đang được bảo trì. Vui lòng thử lại
            sau.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button asChild variant="outline">
            <Link to="/">
              <HomeIcon className="mr-2 h-4 w-4" />
              Trang chủ
            </Link>
          </Button>
          <Button asChild>
            <Link to="javascript:window.location.reload()">
              <RefreshCw className="mr-2 h-4 w-4" />
              Thử lại
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default errorPage;
