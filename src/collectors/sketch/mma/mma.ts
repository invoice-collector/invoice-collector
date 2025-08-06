import { SketchCollector } from '../../sketchCollector';

export class MmaCollector extends SketchCollector {

    static CONFIG = {
        id: "mma",
        name: "MMA",
        description: "i18n.collectors.mma.description",
        version: "0",
        website: "https://mma.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Logo_MMA.jpg",
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
        }
    }

    constructor() {
        super(MmaCollector.CONFIG);
    }
}
