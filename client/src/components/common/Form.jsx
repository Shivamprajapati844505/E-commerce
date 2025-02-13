function CommonForm({formControls}) {
    return ( 
        <Form>

            <div className="flex flex-col gap-3 ">
                {
                     formControls.map(controlItem=> <div className="grid w-full gap-1.5 " key={controlItem.name}></div>)
                }
            </div>
        </Form>
     );
}

export default CommonForm;