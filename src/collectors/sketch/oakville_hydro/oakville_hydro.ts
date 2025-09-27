
import { SketchCollector } from '../../sketchCollector';

export class OakvilleHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "oakville_hydro",
        name: "Oakville Hydro",
        description: "i18n.collectors.oakville_hydro.description",
        version: "0",
        website: "https://www.oakvillehydro.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8867.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.oakvillehydro.com",
    }

    constructor() {
        super(OakvilleHydroCollector.CONFIG);
    }
}
