import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CreateProductPage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <h1 className="text-2xl font-bold">Crear producto</h1>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Crear producto</CardTitle>
          <CardDescription>
            <p>
              Crea un nuevo producto para que puedas vender en tu tienda. Puedes
              crear un producto con una imagen, un nombre, una descripción y
              precio.
            </p>
          </CardDescription>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nombre del producto"
                />
              </div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </main>
  );
}
