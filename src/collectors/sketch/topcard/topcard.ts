
import { SketchCollector } from '../../sketchCollector';

export class TopcardCollector extends SketchCollector {

    static CONFIG = {
        id: "topcard",
        name: "TopCard",
        description: "i18n.collectors.topcard.description",
        version: "0",
        website: "https://esrv.topcard.ch/cop/portal/Bewegungen/liste.faces#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/386526.jpg",
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
        entryUrl: "https://esrv.topcard.ch/cop/portal/Bewegungen/liste.faces#",
    }

    constructor() {
        super(TopcardCollector.CONFIG);
    }
}
