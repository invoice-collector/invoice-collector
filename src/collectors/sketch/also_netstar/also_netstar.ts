
import { SketchCollector } from '../../sketchCollector';

export class AlsoNetstarCollector extends SketchCollector {

    static CONFIG = {
        id: "also_netstar",
        name: "ALSO Netstar",
        description: "i18n.collectors.also_netstar.description",
        version: "0",
        website: "https://netzvermarktung.also.com/pvd",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2222075.jpg",
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
        entryUrl: "https://netzvermarktung.also.com/pvd",
    }

    constructor() {
        super(AlsoNetstarCollector.CONFIG);
    }
}
