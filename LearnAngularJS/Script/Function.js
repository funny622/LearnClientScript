var app = angular.module("myTable", []);

app.controller("dataCtrl", function ($scope) {
    $scope.files = [
        { img: "../Image/if_folder_172467.png", name: "CAS", modified: "April 30", modifiedby: "Megan Bowen" },
        { img: "../Image/icons8-document-20.png", name: "Text.txt", modified: "A few seconds ago", modifiedby: "Administrator MOD" },
        { img: "../Image/if_logo_brand_brands_logos_excel_2993694.png",name: "CoasterAndBargeLoading.xlsx", modified: "A few seconds ago", modifiedby: "Administrator MOD" },
        { img: "../Image/if_logo_brand_brands_logos_excel_2993694.png",name: "RevenueByServieces.xlsx", modified: "A few seconds ago", modifiedby: "Administrator MOD" },
        { img: "../Image/if_logo_brand_brands_logos_excel_2993694.png",name: "RevenueByServieces2016.xlsx", modified: "A few seconds ago", modifiedby: "Administrator MOD" },
        { img: "../Image/if_logo_brand_brands_logos_excel_2993694.png",name: "RevenueByServieces2017.xlsx", modified: "A few seconds ago", modifiedby: "Administrator MOD" }
    ];
    $scope.detailFile = false;
    $scope.tbIndex = false;
    var indexcon = null;

    $scope.showbox = function (index) {
        $scope.tbIndex = true;
        $scope.detailFile = true;
        $scope.selector = index;

        $scope.name = $scope.files[index].name;
        $scope.img = $scope.files[index].img;
        $scope.panel1 = {
            "transition": "margin-left .5s",
        }
        $scope.panel2 = {
            "right": "0",
            "width": "280px",
            "border-left": "20px solid lightgray",
            "background-color":"white",
            "height": "100%",
            "position": "fixed",
            "z-index": "1",
            "top": "0",
            "overflow-x": "hidden",
            "transition": "0.5s",
            "padding-top":"10px"
        }

        if (indexcon == index) {
            $scope.detailFile = $scope.detailFile ? false : true;
            $scope.tbIndex = false;
            indexcon = null;
            $scope.panel1 = {
            }
            $scope.panel2 = {
                "width":"0px",
            }
        }
        else {
            indexcon = index;
        }
    }
});
