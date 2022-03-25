import multer from "fastify-multer";
import path from "path";
import * as BrandsController from "../controllers/brands-controller";
import * as CarsController from "../controllers/cars-controller";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + extension);
  },
});

const upload = multer({ storage });

const routes = {
  getCar: {
    method: "GET",
    url: "/cars",
    handler: CarsController.GET,
  },
  postCar: {
    method: "POST",
    url: "/cars",
    handler: CarsController.POST,
  },
  editCar: {
    method: "PUT",
    url: "/cars",
    handler: CarsController.PUT,
  },
  deleteCar: {
    method: "DELETE",
    url: "/cars",
    handler: CarsController.DELETE,
  },
  getBrand: {
    method: "GET",
    url: "/brands",
    handler: BrandsController.GET,
  },
  postBrand: {
    method: "POST",
    url: "/brands",
    handler: BrandsController.POST,
  },
  editBrand: {
    method: "PUT",
    url: "/brands",
    handler: BrandsController.PUT,
  },
  deleteBrand: {
    method: "DELETE",
    url: "/brands",
    handler: BrandsController.DELETE,
  },
};
routes = Object.values(routes);
export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
