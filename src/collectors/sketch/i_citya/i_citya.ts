
import { SketchCollector } from '../../sketchCollector';

export class ICityaCollector extends SketchCollector {

    static CONFIG = {
        id: "i_citya",
        name: "I-Citya",
        description: "i18n.collectors.i_citya.description",
        version: "0",
        website: "https://www.citya.com/i-citya/coproprietaire",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108557.jpg",
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
        entryUrl: "https://www.citya.com/i-citya/coproprietaire",
    }

    constructor() {
        super(ICityaCollector.CONFIG);
    }
}
