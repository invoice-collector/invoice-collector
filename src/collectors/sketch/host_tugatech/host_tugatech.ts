
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostTugatechCollector extends SketchCollector {

    static CONFIG = {
        id: "host_tugatech",
        name: "Host Tugatech",
        description: "i18n.collectors.host_tugatech.description",
        version: "0",
        website: "https://clientes.host.tugatech.com.pt/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9457.jpg",
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
        entryUrl: "https://clientes.host.tugatech.com.pt/clientarea.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostTugatechCollector.CONFIG);
    }
}
