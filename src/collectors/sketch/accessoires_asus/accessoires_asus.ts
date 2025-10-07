
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AccessoiresAsusCollector extends SketchCollector {

    static CONFIG = {
        id: "accessoires_asus",
        name: "Accessoires ASUS",
        description: "i18n.collectors.accessoires_asus.description",
        version: "0",
        website: "https://www.accessoires-asus.com/compte/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526269.jpg",
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
        entryUrl: "https://www.accessoires-asus.com/compte/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AccessoiresAsusCollector.CONFIG);
    }
}
