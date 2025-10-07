
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IxtemMotoCollector extends SketchCollector {

    static CONFIG = {
        id: "ixtem_moto",
        name: "Ixtem-moto",
        description: "i18n.collectors.ixtem_moto.description",
        version: "0",
        website: "https://ixtem-moto.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120471.jpg",
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
        entryUrl: "https://ixtem-moto.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IxtemMotoCollector.CONFIG);
    }
}
