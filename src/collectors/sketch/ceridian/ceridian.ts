
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CeridianCollector extends SketchCollector {

    static CONFIG = {
        id: "ceridian",
        name: "Ceridian",
        description: "i18n.collectors.ceridian.description",
        version: "0",
        website: "http://www.ceridian.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8716.jpg",
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
        entryUrl: "http://www.ceridian.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CeridianCollector.CONFIG);
    }
}
