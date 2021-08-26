import { resource } from "angular";

const PhoneService = ($resource: resource.IResourceService) =>
  $resource(
    "assets/phones/:phoneId.json",
    {},
    {
      query: {
        method: "GET",
        params: { phoneId: "phones" },
        isArray: true,
      },
    }
  );

export default PhoneService;
