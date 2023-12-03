import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Badge } from 'antd';

  export default function CardC({ image, name, price }) {
    return (
      <>
        <Card className="w-56 p-0">
        <Badge.Ribbon text="50%" color='cyan'>

          <CardHeader shadow={false} floated={false} className="h-56 p-0">
            <img
              src={`${image}`}
              alt="card-image"
              className="h-full w-full object-cover m-0 p-0" // Remove padding and margin
            />
          </CardHeader>
          <CardBody>
          <Typography
              variant="small"
              color="black"
              className="font-normal opacity-75 "

            >
                
                <span className="line-through ">OFF ON 190$</span>
              
            </Typography>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
{name}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
{price}
              </Typography>
            </div>
           
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </CardFooter>
          </Badge.Ribbon>

        </Card>
      </>
    );
  }
  