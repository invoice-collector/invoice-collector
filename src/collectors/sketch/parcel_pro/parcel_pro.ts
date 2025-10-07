
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ParcelProCollector extends SketchCollector {

    static CONFIG = {
        id: "parcel_pro",
        name: "Parcel Pro",
        description: "i18n.collectors.parcel_pro.description",
        version: "0",
        website: "http://www.parcelpro.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44823.jpg",
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
        entryUrl: "http://www.parcelpro.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ParcelProCollector.CONFIG);
    }
}
