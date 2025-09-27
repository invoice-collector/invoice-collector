
import { SketchCollector } from '../../sketchCollector';

export class KassenzahnarztlicheVereinigungKzvbCollector extends SketchCollector {

    static CONFIG = {
        id: "kassenzahnarztliche_vereinigung_kzvb",
        name: "Kassenzahnarztliche Vereinigung (KZVB)",
        description: "i18n.collectors.kassenzahnarztliche_vereinigung_kzvb.description",
        version: "0",
        website: "https://srv.kzvb.de/eHealthPortal/core/protected/dms/zeigeDokumente.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1612137.jpg",
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
        entryUrl: "https://srv.kzvb.de/eHealthPortal/core/protected/dms/zeigeDokumente.xhtml",
    }

    constructor() {
        super(KassenzahnarztlicheVereinigungKzvbCollector.CONFIG);
    }
}
