
import { SketchCollector } from '../../sketchCollector';

export class Kuv24Collector extends SketchCollector {

    static CONFIG = {
        id: "kuv24",
        name: "KuV24",
        description: "i18n.collectors.kuv24.description",
        version: "0",
        website: "https://www.kuv24.de/mykuv24_getfile.php?iddokument=50221",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105772.jpg",
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
        entryUrl: "https://www.kuv24.de/mykuv24_getfile.php?iddokument=50221",
    }

    constructor() {
        super(Kuv24Collector.CONFIG);
    }
}
