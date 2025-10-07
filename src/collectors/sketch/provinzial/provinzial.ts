
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProvinzialCollector extends SketchCollector {

    static CONFIG = {
        id: "provinzial",
        name: "Provinzial",
        description: "i18n.collectors.provinzial.description",
        version: "0",
        website: "https://kundenportal.provinzial.com/anmeldung/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510869.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://kundenportal.provinzial.com/anmeldung/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProvinzialCollector.CONFIG);
    }
}
