//ch9 qn1 solution : took 50mins to solve
const loadScript = async (src) => {
    return new Promise(
        (resolve, reject) => {
            let script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve('Script Loaded');
            }
            document.body.append(script);
        }
    )
}
const main1 = async () => {
    let a = await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js');
    console.log(a);

}
main1();
