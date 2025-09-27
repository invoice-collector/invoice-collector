
import { SketchCollector } from '../../sketchCollector';

export class DesignPickleCollector extends SketchCollector {

    static CONFIG = {
        id: "design_pickle",
        name: "DESIGN PICKLE",
        description: "i18n.collectors.design_pickle.description",
        version: "0",
        website: "https://jar.designpickle.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/988598.jpg",
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
        entryUrl: "https://jar.designpickle.com/users/sign_in",
    }

    constructor() {
        super(DesignPickleCollector.CONFIG);
    }
}
