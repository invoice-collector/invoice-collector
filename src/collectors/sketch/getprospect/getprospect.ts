
import { SketchCollector } from '../../sketchCollector';

export class GetprospectCollector extends SketchCollector {

    static CONFIG = {
        id: "getprospect",
        name: "Getprospect",
        description: "i18n.collectors.getprospect.description",
        version: "0",
        website: "https://getprospect.io/app/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132276.jpg",
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
        entryUrl: "https://getprospect.io/app/settings/billing",
    }

    constructor() {
        super(GetprospectCollector.CONFIG);
    }
}
