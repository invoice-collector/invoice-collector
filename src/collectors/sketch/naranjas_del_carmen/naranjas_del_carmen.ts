
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NaranjasDelCarmenCollector extends SketchCollector {

    static CONFIG = {
        id: "naranjas_del_carmen",
        name: "Naranjas del Carmen",
        description: "i18n.collectors.naranjas_del_carmen.description",
        version: "0",
        website: "https://www.naranjasdelcarmen.com/mein-konto/pedidos",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4115075.jpg",
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
        entryUrl: "https://www.naranjasdelcarmen.com/mein-konto/pedidos",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NaranjasDelCarmenCollector.CONFIG);
    }
}
