
import { SketchCollector } from '../../sketchCollector';

export class ScpCanalDeProvenceCollector extends SketchCollector {

    static CONFIG = {
        id: "scp_canal_de_provence",
        name: "SCP CANAL DE PROVENCE",
        description: "i18n.collectors.scp_canal_de_provence.description",
        version: "0",
        website: "https://moncompteclient.canaldeprovence.com/factures/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2214173.jpg",
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
        entryUrl: "https://moncompteclient.canaldeprovence.com/factures/",
    }

    constructor() {
        super(ScpCanalDeProvenceCollector.CONFIG);
    }
}
