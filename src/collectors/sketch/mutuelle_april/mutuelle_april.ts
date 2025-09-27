
import { SketchCollector } from '../../sketchCollector';

export class MutuelleAprilCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_april",
        name: "Mutuelle April",
        description: "i18n.collectors.mutuelle_april.description",
        version: "0",
        website: "https://monespace.april.fr/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127322.jpg",
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
        entryUrl: "https://monespace.april.fr/#/login",
    }

    constructor() {
        super(MutuelleAprilCollector.CONFIG);
    }
}
