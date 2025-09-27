
import { SketchCollector } from '../../sketchCollector';

export class DeltaTCollector extends SketchCollector {

    static CONFIG = {
        id: "delta_t",
        name: "Delta-t",
        description: "i18n.collectors.delta_t.description",
        version: "0",
        website: "https://www.messdienst24.de/?md=dth#!",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4367620.jpg",
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
        entryUrl: "https://www.messdienst24.de/?md=dth#!",
    }

    constructor() {
        super(DeltaTCollector.CONFIG);
    }
}
