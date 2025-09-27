
import { SketchCollector } from '../../sketchCollector';

export class KunstmatrixCollector extends SketchCollector {

    static CONFIG = {
        id: "kunstmatrix",
        name: "kunstmatrix",
        description: "i18n.collectors.kunstmatrix.description",
        version: "0",
        website: "https://accounts.kunstmatrix.com/en/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973278.jpg",
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
        entryUrl: "https://accounts.kunstmatrix.com/en/user/login",
    }

    constructor() {
        super(KunstmatrixCollector.CONFIG);
    }
}
