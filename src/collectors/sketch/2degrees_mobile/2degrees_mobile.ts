
import { SketchCollector } from '../../sketchCollector';

export class _2degreesMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "2degrees_mobile",
        name: "2degrees Mobile",
        description: "i18n.collectors.2degrees_mobile.description",
        version: "0",
        website: "http://www.2degreesmobile.co.nz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8707.jpg",
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
        entryUrl: "http://www.2degreesmobile.co.nz",
    }

    constructor() {
        super(_2degreesMobileCollector.CONFIG);
    }
}
