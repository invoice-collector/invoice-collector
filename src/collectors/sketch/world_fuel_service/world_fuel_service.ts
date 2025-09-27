
import { SketchCollector } from '../../sketchCollector';

export class WorldFuelServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "world_fuel_service",
        name: "World Fuel Service",
        description: "i18n.collectors.world_fuel_service.description",
        version: "0",
        website: "https://aviation.wfscorp.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/786660.jpg",
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
        entryUrl: "https://aviation.wfscorp.com/",
    }

    constructor() {
        super(WorldFuelServiceCollector.CONFIG);
    }
}
