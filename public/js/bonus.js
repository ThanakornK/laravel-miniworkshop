$(document).ready(function(){
    $('.deleteForm').click(function(event){
        var name=$(this).data("name");
        var form=$(this).closest("form");
        event.preventDefault();
        swal({
            title:`Do you want to delete ${name} ?`,
            text:"If you deleted it will never restore back.",
            icon:"warning",
            buttons:true,
            dangerMode:true
        }).then((willDelete)=>{
            if(willDelete){
                form.submit();
            }
        })
    });
});