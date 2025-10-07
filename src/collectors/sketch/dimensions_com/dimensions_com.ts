
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DimensionsComCollector extends SketchCollector {

    static CONFIG = {
        id: "dimensions_com",
        name: "Dimensions.com",
        description: "i18n.collectors.dimensions_com.description",
        version: "0",
        website: "https://www.dimensions.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1122487.jpg",
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
        entryUrl: "https://www.dimensions.com/users/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DimensionsComCollector.CONFIG);
    }
}
