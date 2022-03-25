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
    handler: CarsController.getAll,
  },
  postCar: {
    method: "POST",
    url: "/cars",
    handler: CarsController.create,
  },
  editCar: {
    method: "PUT",
    url: "/cars",
    handler: CarsController.edit,
  },
  deleteCar: {
    method: "DELETE",
    url: "/cars",
    handler: CarsController.remove,
  },
  getBrand: {
    method: "GET",
    url: "/brands",
    handler: BrandsController.getAll,
  },
  postBrand: {
    method: "POST",
    url: "/brands",
    handler: BrandsController.create,
  },
  editBrand: {
    method: "PUT",
    url: "/brands",
    handler: BrandsController.edit,
  },
  deleteBrand: {
    method: "DELETE",
    url: "/brands",
    handler: BrandsController.remove,
  },
};
routes = Object.values(routes);
export default givenRoutes = (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
