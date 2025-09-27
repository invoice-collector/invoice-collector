
import { SketchCollector } from '../../sketchCollector';

export class OceanIoCollector extends SketchCollector {

    static CONFIG = {
        id: "ocean_io",
        name: "Ocean IO",
        description: "i18n.collectors.ocean_io.description",
        version: "0",
        website: "https://app.ocean.io/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2694552.jpg",
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
        entryUrl: "https://app.ocean.io/signin",
    }

    constructor() {
        super(OceanIoCollector.CONFIG);
    }
}
