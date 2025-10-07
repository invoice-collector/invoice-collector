
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RentmanCollector extends SketchCollector {

    static CONFIG = {
        id: "rentman",
        name: "Rentman",
        description: "i18n.collectors.rentman.description",
        version: "0",
        website: "https://rentmanapp.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/530553.jpg",
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
        entryUrl: "https://rentmanapp.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RentmanCollector.CONFIG);
    }
}
