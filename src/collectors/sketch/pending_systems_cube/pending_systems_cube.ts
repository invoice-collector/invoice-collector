
import { SketchCollector } from '../../sketchCollector';

export class PendingSystemsCubeCollector extends SketchCollector {

    static CONFIG = {
        id: "pending_systems_cube",
        name: "Pending Systems (CUBE)",
        description: "i18n.collectors.pending_systems_cube.description",
        version: "0",
        website: "https://b2b.cube.eu/Account/Login?ReturnUrl=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1121172.jpg",
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
        entryUrl: "https://b2b.cube.eu/Account/Login?ReturnUrl=%2f",
    }

    constructor() {
        super(PendingSystemsCubeCollector.CONFIG);
    }
}
