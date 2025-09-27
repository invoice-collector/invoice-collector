
import { SketchCollector } from '../../sketchCollector';

export class SpinrewriterCollector extends SketchCollector {

    static CONFIG = {
        id: "spinrewriter",
        name: "Spinrewriter",
        description: "i18n.collectors.spinrewriter.description",
        version: "0",
        website: "https://www.smiley-tech.com/invoice.php?a=i6w5r4i6i6-8w5&b=eeba0299e149e854360d0871f0806eae32d30983b62252da50&c=r4a0i6a0z2w5w5",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144110.jpg",
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
        entryUrl: "https://www.smiley-tech.com/invoice.php?a=i6w5r4i6i6-8w5&b=eeba0299e149e854360d0871f0806eae32d30983b62252da50&c=r4a0i6a0z2w5w5",
    }

    constructor() {
        super(SpinrewriterCollector.CONFIG);
    }
}
