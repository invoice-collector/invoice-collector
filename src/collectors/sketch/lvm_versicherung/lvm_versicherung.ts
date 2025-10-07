
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LvmVersicherungCollector extends SketchCollector {

    static CONFIG = {
        id: "lvm_versicherung",
        name: "LVM Versicherung",
        description: "i18n.collectors.lvm_versicherung.description",
        version: "0",
        website: "http://www.lvm.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15179.jpg",
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
        entryUrl: "http://www.lvm.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LvmVersicherungCollector.CONFIG);
    }
}
